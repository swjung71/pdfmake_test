/*
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
*/


var documentDefinition = {
//content : pdf의 내용을 정의
    content: [
        {
            text: 'one'
        }, // 스타일 적용 없이 그냥 출력
        {
            text: 'two',
            bold: true
        }, // 텍스트에 bold 주기
        {
            text: '한글 출력 테스트',
            style: 'style_test'
        }, // style 부분에 정의된 style_test 적용해보기 및 한글 꺠짐 테스트
        {
            style: 'tableExample',
            table: {
                widths: [100, '*', 200, '*'],
                body: [
                    ['width=100', 'star-sized', 'width=200', 'star-sized'],
                    ['fixed-width cells have exactly the specified width', {
                        text: '박',
                        italics: true,
                        color: 'gray'
                    }, {
                        text: '범',
                        italics: true,
                        color: 'gray'
                    }, {
                        text: '영',
                        italics: true,
                        color: 'gray'
                    }]
                ]
            }
        }//테이블 그리기
    ],
//하단의 현재페이지 / 페이지 수 넣기
    footer: function (currentPage, pageCount) {
        return {
            margin: 10,
            columns: [{
                fontSize: 9,
                text: [{
                    text: '--------------------------------------------------------------------------' +
                    '\n',
                    margin: [0, 20]
                },
                    {
                        text: '' + currentPage.toString() + ' of ' +
                        pageCount,
                    }
                ],
                alignment: 'center'
            }]
        };

    },
//필요한 스타일 정의하기
    styles: {
        style_test: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 0],
            alignment: 'center'
        },
        tableExample: {
            margin: [0, 5, 0, 15]
        }
    },

// 페이지 크기 용지의 크기 사이즈 넣기 또는 특정 사이즈 넣기 { width: number, height: number }
    pageSize: 'A4',

    /* 페이지 방향 portrait : 가로 , landscape : 세로 */
    pageOrientation: 'portrait',
};



var pdf_name = 'aaa.pdf'; // pdf 만들 파일의 이름
pdfMake.createPdf(documentDefinition).download(pdf_name);

