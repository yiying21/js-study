'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제4 사용자로부터 2개의 숫자를 입력 받아서 더한 결과를 다음과 같이 출력하라
// The total is [결과]

const num1 = question('첫번째 숫자를 입력하세요:');
const num2 = question('두번째 숫자를 입력하세요:');
const result = Number(num1) + Number(num2);

console.log('The total is', result);
