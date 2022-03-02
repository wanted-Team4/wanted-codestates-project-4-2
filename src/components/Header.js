import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = styled.nav`
  width: 100%;
  position: relative;
  background-color: #005fcc;
`;

const NavInner = styled.div`
  position: relative;
  width: 1000px;
  height: 55px;
  margin: auto;
  color: #fff;
  line-height: 55px;
  z-index: 15;
`;

const TabMenu = styled.ul`
  display: inline-block;
`;

const Menu = styled.li`
  font-size: 14px;
  text-align: center;
  width: 120px;
  float: left;
`;

const MenuContent = styled.div`
  height: 55px;
  box-sizing: border-box;
  width: 80px;
  opacity: ${(props) => (props.isExact ? 1 : 0.5)};
  transition: all 0.15s ease-in-out;
  border-bottom: ${(props) => (props.isExact ? "4px solid white" : "none")};

  &:after {
    width: 0px;
    position: absolute;
    display: block;
    content: " ";
    bottom: 0;
    margin: 0 auto;
    border-bottom: 4px solid white;
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    opacity: 1;
    &:after {
      width: 80px;
    }
  }
`;

const Search = styled.form`
  position: absolute;
  top: 0;
  right: 15px;
  width: 220px;
  height: 80%;
`;

const SearchInput = styled.input`
  width: 195px;
  height: 32px;
  padding-left: 10px;
  padding-right: 25px;
  font-size: 12px;
  background-color: transparent;
  outline: 0;
  color: white;
  border: none;
  border-bottom: 1px solid #fff;
  opacity: 0.5;
  transition: 0.3s ease;
  &::placeholder {
    color: white;
  }
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const SearchBtn = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 22px;
  right: 22px;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/?nick=${e.target[0].value}`);
  };

  return (
    <Navbar>
      <NavInner>
        <TabMenu>
          <Menu>
            <MenuContent
              isExact={location.pathname === "/?nick=BBEESSTT" ? 1 : 0}
            >
              <Link to="/?nick=BBEESSTT">홈</Link>
            </MenuContent>
          </Menu>
          <Menu>
            <MenuContent isExact={location.pathname === "/rank" ? 1 : 0}>
              <Link to="/rank">랭킹</Link>
            </MenuContent>
          </Menu>
        </TabMenu>

        <Search onSubmit={onSubmit}>
          <SearchInput type="text" placeholder="닉네임 검색" />
          <SearchBtn type="submit">
            <i
              style={{ color: "white", cursor: "pointer" }}
              class="fa fa-search"
            ></i>
          </SearchBtn>
        </Search>
      </NavInner>
    </Navbar>
  );
};
export default Header;
