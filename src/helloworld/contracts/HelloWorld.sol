pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    string public greeting;

    //https://stackoverflow.com/questions/58258808/data-location-must-be-memory-for-return-parameter-in-function-but-none-was-gi
    // solidity 0.5.0이후로 string 뒤에는 memory 키워드를 붙여줘야 한다고 한다.
    constructor(string memory _greeting) public {
        greeting = _greeting;
    }

    //public 제한자 추가
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    // constant는 view 또는 pure로 대체되었다.
    // pure는 constant와 똑같다
    // pure 는 storage에 접근 불가능한 옵션
    function say() public view returns (string memory) {
        return greeting;
    }
}
