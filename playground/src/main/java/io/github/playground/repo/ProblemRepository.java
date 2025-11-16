package io.github.playground.repo;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.playground.dto.Problem;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Repository
public class ProblemRepository {
    private final Map<Long, Problem> store = new LinkedHashMap<>();

    public ProblemRepository(ObjectMapper objectMapper) {
        loadProblemsFromJson(objectMapper);
    }
    private void loadProblemsFromJson(ObjectMapper objectMapper) {
        try {
            // classpath:/problems/*.json 찾아오기 - Path로 가져왔는데 오류발생으로,,,
            PathMatchingResourcePatternResolver resolver =
                    new PathMatchingResourcePatternResolver();
            Resource[] resources = resolver.getResources("classpath:problems/*.json");

            if (resources.length == 0) {
                throw new IllegalStateException("classpath:problems/*.json 리소스를 찾을 수 없습니다.");
            }

            for (Resource resource : resources) {
                Problem problem = objectMapper.readValue(resource.getInputStream(), Problem.class);
                store.put(problem.getId(), problem);
            }
        } catch (IOException e) {
            throw new RuntimeException("문제 JSON 로딩 중 오류 발생", e);
        }
    }

    public List<Problem> findAll(){
        return new ArrayList<>(store.values());
    }
    public Optional<Problem> findById(Long id){
        return Optional.ofNullable(store.get(id));
    }
}
