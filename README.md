# Dapp Studt

## About

- 인프런 무료강의인 [리액트로 구현하는 블록체인 이더리움 Dapp](https://www.inflearn.com/course/dapp) 을 따라하면서 최신 버전에 맞게 코드를 수정하여 정리합니다.

### version

- Truffle v5.3.2
- Solidity v0.5.16
- Node v15.2.0

## Hello, World 컨트랙트

### 변동사항

- 소스는 소스파일 참고
- truffle 콘솔에서 이더리움 계정 확인
  - web3.eth.accounts -> web3.eth.getAccounts()
- 콘트랙트 참조하기 (인스턴스 만들기)
  - var 인스턴스이름 = 콘트랙트이름.at(“콘트랙트 주소”) -> const 인스턴스이름 = await 콘트랙트이름.deployed()
