1. dp 테이블에 어떤 값이 저장되어야 하는지 생각해봐야 한다.
- dp 테이블에 저장될 값을 정해려면 수학접 귀납법으로 생각하면 된다. dp[0...i-1]까지의 값을 알고 있을 때 dp[i]를 어떻게 구할 것인지 생각한다.
- 여기서는 dp[i]에 저장될 값은 nums[i]로 끝나는 최장 부분 수열의 길이이다.
2. 여기서 dp 테이블은 1차원 배열로 사용되었다. dp 테이블은 다양한 형태로 저장될 수 있기 때문에 문제별로 패턴을 기억해놓는 것이 좋을 것 같다.