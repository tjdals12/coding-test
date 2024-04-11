[문제](https://school.programmers.co.kr/learn/courses/30/lessons/42842)

1. brown과 yellow를 더하면 면적을 알 수 있다.
2. 주어진 조건에 의해서 width, height의 최소값은 3과 1이다.
3. width와 height를 변경하면서 면적과 일치하는 경우를 찾는다.
4. 면적과 일치하는 경우 brown의 갯수가 일치하는 확인한다. brown은 테두리 한줄이라고 했으니 (width + height) * 2 - 4로 구할 수 있다.
5. brown의 갯수가 일치한다면 반복문을 종료하고 width와 height 중 큰 값을 가로, 작은 값을 세로로 하여 반환한다.