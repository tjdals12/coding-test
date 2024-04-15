[문제](https://school.programmers.co.kr/learn/courses/30/lessons/43165)

1. 주어진 숫자 배열을 덧셈, 뺄셈을 조합하여 target 숫자를 만들어야 하므로 완전 탐색을 해야 한다.
2. 먼저 주어진 숫자 배열을 모두 더한다.
3. 백트래킹을 통해 각 요소의 숫자 * 2 한 값을 빼주면서 target 숫자와 맞으면 answer를 올리고 작아진다면 다음 요소를 탐색한다.