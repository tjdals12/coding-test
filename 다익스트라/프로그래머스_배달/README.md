[문제](https://school.programmers.co.kr/learn/courses/30/lessons/12978)

1. 1번 정점에서 각 정점으로 가기 위한 최소 비용을 계산한다.
2. 계산한 비용이 K보다 작거나 같은 값의 갯수를 반환하면 된다.
3. 각 정점에서 이동 가능한 정점과 비용 정보를 정점별로 정리하고 1번 정점부터 차례대로 방문한다.
4. 다른 정점에서 1번 정점으로 가는 비용은 계산할 필요가 없기 때문에 1번 정점의 비용은 0으로 만들고 다른 정점은 무한으로 설정한다.
5. 이미 계산된 비용이 다른 정점을 경유해서 가는 비용보다 크다면 갱신하여 최소 비용을 찾는다.
5. 더 이상 방문할 정점이 없을 때까지 계산한다.