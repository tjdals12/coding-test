[문제](https://school.programmers.co.kr/learn/courses/30/lessons/178870)

1. 부분 수열의 만들기 위해서 중첩 반복문을 사용할 경우 시간 초과가 발생함.
2. 배열의 순회하면서 값을 누적시키고 값이 k가 된다면 시작 인덱스, 종료 인덱스, 길이를 저장한다.
3. 기존에 시작 인덱스, 종료 인덱스, 길이를 저장했다면 길이가 더 짧은 경우에만 갱신한다.
4. 그리고 해당 숫자를 큐에 저장한다.
5. 누적시킨 값이 k를 넘어간다면 큐에 있는 값들을 꺼내서 누적시킨 값이 k보다 작거나 같아질 때까지 빼준다.
6. 이때 누적시킨 값이 k와 같아진다면 2 ~ 3번 과정을 수행한다.
7. 누적시킨 값이 k를 넘지 않았다면 해당 숫자를 큐에 저장하고 과정을 반복한다.

**이때 shift,push를 통해 큐를 만든다면 shift에 의해 시간초과가 발생한다. LinkedList를 활용한 큐를 만들어서 사용해야 통과한다.