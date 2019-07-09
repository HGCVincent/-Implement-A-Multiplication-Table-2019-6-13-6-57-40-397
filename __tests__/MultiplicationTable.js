const multiplication = require('../src/MultiplicationTable.js');


// test for function createMultiplicationTable
it('should return null when invoke createMultiplicationTable given 3,1', function () {
    //given
    const start = 3;
    const end = 1;
    //when
    const result = multiplication.createMulplicationTable(start,end);
    //then
    expect(result).toBe(null);

});

it('should return null when invoke createMultiplicationTable given 0,3', function () {
    //given
    const start = 0;
    const end = 3;
    //when
    const result = multiplication.createMulplicationTable(start,end);
    //then
    expect(result).toBe(null);

});

it('should return null when invoke createMultiplicationTable given 1,1001', function () {
    //given
    const start = 1;
    const end = 1001;
    //when
    const result = multiplication.createMulplicationTable(start,end);
    //then
    expect(result).toBe(null);

});

it ('should return result string when invoke createMultiplicationTable given 2, 2', () => {

    //given
    const start = 2;
    const end = 2;
    //when
    const result = multiplication.createMulplicationTable(start,end);
    //then
    expect(result).toBe('2*2=4  \n');
});

it ('should return result string when invoke createMultiplicationTable given 2, 4', () => {

    //given
    const start = 2;
    const end = 4;
    //when
    const result = multiplication.createMulplicationTable(start,end);
    //then
    expect(result).toBe("2*2=4"+"  "+"\n" + "2*3=6  3*3=9"+"  "+"\n" + "2*4=8  3*4=12  4*4=16"+"  "+"\n");
});

