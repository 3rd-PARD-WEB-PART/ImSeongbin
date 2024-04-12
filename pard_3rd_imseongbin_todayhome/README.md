# 오늘의 집 클론 코딩 3번째

### Features

+ Input fields for email, password, password confirmation and nickname.
+ Password requirments are mentioned
+ 프로필 페이지, 설정 페이지 구현
+ 라우터를 이용하여 각 페이지들 연결

### Installation

스타일 컴포넌트, 라우터 설치 필요


### Styling

Styling for this component is provided throught the 'RegisterPage.css' file, which must be imported into the project.
ProfilePage.js, EditProfile 등 styled component를 활용해서 스타일링함.

### Structure

+ mBox: Main container for the registeration form.
  + top: Container for the logo
    + logo: Image representing the logo of the application
  + subBox: Container for the registration form.
    + sBox: Sub-container for the form elements.
      + title-text: Title text for the registeration form.
      + second-title: Subtitles for various input fields providing guidance to users.
      + input: Input fields for email, password, password confirmation, and nickname.
      + btu-font: Button for user registeration.
      + check-text: Text indicating an option to navigate to the login page.
