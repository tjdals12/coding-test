[문제](https://school.programmers.co.kr/learn/courses/30/lessons/12907)

1. DFS를 사용하면 재귀 호출 스택이 깊어서 실패한다. BFS는 중복을 확인할 수 없기 때문에 실패한다. DP로 풀어야 하는 문제이다.
2. 처음에 DP 테이블을 n + 1만큼 만들고 0으로 초기화한다.
- DP 테이블에는 n을 만들 수 있는 경우의 수를 기록한다.
3. money의 각 요소를 m이라고 했을 때 m부터 n까지 순회한다. 이때 각 요소를 k라고 했을 때 m을 통해 k를 만들 수 있는 경우의 수를 기록한다.
- m부터 n까지 순회하기 때문에 처음 값은 m이고 k는 m이 된다. 그래서 m을 통해 k를 만들 수 있는 방법은 1이다. dp[k]에 1이 기록된다.
- 다음의 k는 m + 1이 된다. 그래서 k에서 m을 빼고 나면 1이 남게 되는데 dp 테이블에 1을 만들 수 있는 경우의 수는 0이기 때문에 m을 통해 k를 만들 수 있는 방법은 없다. dp[k]에 0이 기록된다.
- 이렇게 순차적으로 순회를 하면 money의 맨 처음 요소를 사용하여 만들 수 있는 경우의 수가 기록된다.
- 다음 m도 같은 과정을 수행하게 되는데 이때 dp에 기록된 값들이 이번 값을 구하는데 사용되기 때문에 누적되어 업데이트 된다.

*DP에 어떤 값을 기록해야 될지 생각해야 한다.
*주어진 예시를 통해 어떠한 규칙성이 있는지 파악해야 한다.