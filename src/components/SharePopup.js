import styled from "styled-components";

const Container = styled.div`
    width: 160px;
    height: 150px;
    top: 150px;
    left: 850px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    position: absolute;
    box-shadow: 10px 10px 10px rgb(0 0 0 / 10%);
`
const TitleBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #e7e7e7;
`
const Title = styled.p`
    font-weight: 400;
`
const ShareBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`
const Icon = styled.img`
    width: 40px;
    margin-bottom: 10px;
`
const Facebook = styled.div`
    text-align: center;
`
const Url = styled.div`
    text-align: center;
`
const Text = styled.p`
    font-size: 13px;
    font-weight: 300;
`

const SharePopup = ({ modalHandler }) => {

    // const handleShareUrl = () => {
    //     let dummy = document.createElement("input");
    //     let text = process.env.REACT_APP_CLIENT_URL + `/foryouview/:${review.id}`;

    //     document.body.appendChild(dummy);
    //     dummy.value = text;
    //     dummy.select();
    //     document.execCommand("copy");
    //     document.body.removeChild(dummy);
    //     dispatch(setMessageModal(true, `URL 복사 완료 🙌🏻`));
    // };
    console.log(modalHandler)
    return (
        <Container>
            <TitleBar>
                <Title>공유하기</Title>
                <i
                    className="fa-solid fa-xmark"
                    onClick={modalHandler}
                ></i>
            </TitleBar>
            <ShareBox>
                <Facebook>
                    <Icon src="img/icon_fb.svg" />
                    <Text>페이스북</Text>
                </Facebook>
                <Url>
                    <Icon src="img/icon_url.svg" />
                    <Text>URL 복사</Text>
                </Url>
            </ShareBox>
        </Container>
    );
}

export default SharePopup;