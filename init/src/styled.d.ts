import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    /*  테마를 설명하는 코드
    borderRadius: string;
    color: {
      main: string;
      secondary: string;
    };
    */
    textColor: string;
    bgColor: string;
  }
}
