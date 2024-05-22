[문제](https://school.programmers.co.kr/learn/courses/30/lessons/154539)

1. numbers의 길이는 최대 1,000,000이다. 탐색을 위해 이중 for 문을 사용하면 시간 초과가 발생한다.
2. 비슷한 방법으로 앞에서부터 탐색할 경우에도 시간 초과가 발생한다. 뒤에 있는 요소를 탐색해야 하기 때문에 뒤에 있는 요소를 탐색하는 횟수를 줄여야 한다. 그래서 뒤부터 탐색하여 값을 저장하고 탐색 전 이 값을 활용하게 한다.
2. answer를 numbers의 길이와 같은 배열로 만들고 -1로 채운다.
3. 뒤에서부터 탐색을 하되 answer에 값을 활용하여 불필요한 탐색을 하지 않도록 한다.
- numbers[j]가 numbers[i]보다 큰 수라면 answer[i]에 numbers[j]를 저장하고 break 한다.
- numbers[j]가 numbers[i]보다 작거나 같다면 answer[j]를 검사하여 -1이라면 answer[i]에 break한다. (나보다 작거나 같은 수가 -1이라면 뒤에 나보다 큰 수가 없다는 뜻이기 떄문이다.)
- numbers[j]가 numbers[i]보다 작거나 같은데 answer[j]가 -1이 아니라면 numbers[i]와 비교하여 큰 경우 answer[i]에 answer[j]를 저장하고 break한다.
4. answer에 저장된 값은 이미 계산된 값이라고 할 수 있기 때문에 이 문제는 dp로 분류할 수 있다.