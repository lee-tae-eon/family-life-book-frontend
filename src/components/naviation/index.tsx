function Navigation() {
  return (
    <nav className=" flex items-center justify-between w-full h-16 border-b-[1px] fixed top-0">
      <div className="flex">
        <div>LOGO</div>
        <div>기간별 보기</div>
        <div>최근 업로드</div>
        <div>업로드</div>
      </div>
      <div className="">
        <div>로그인</div>
      </div>
    </nav>
  );
}

export default Navigation;
