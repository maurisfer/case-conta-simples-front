import styled from 'styled-components';

export const Container  = styled.div `
width: 100vw;
height: 100%;
font-family: Open Sans;
font-weight: normal;


nav {
  background-color: #fff;
  height: 52px;
  width: 220px;
}
#navinfos{
  width: 220px;
  height: 52px;
  position: absolute;
  margin-left: 80px;
  display: flex;
  align-items: center;
  button{
    border: none;
    background: none;
    margin-left: 50px;
  }
  button:hover{
    cursor: pointer ;
  }
}


#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 17px;
  left: 15px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: flex;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span
{
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #45B54A;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: #45B54A;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 220px;

  box-shadow: 0 0 10px #85888C;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 80px;
  background-color: #fff;
  transform-origin: 0% 0%;
  transform: translate(-120%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  width: 220px;
  padding: 3px 0;
  list-style: none;
  transition-delay: 2s;
}

#menu li a {
  width: 220px;
  text-decoration: none;
  font-size: 12px;
  color: #333333;
}
#menu li a:hover{
  color: #45B54A;
}
#menu li a img {
  margin-right: 10px;
  margin-bottom: -2px
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

div#wellcomediv{
  height: 175px;
  background: #45B54A;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 94.5px 0px;
    h2{
      font-weight: 600;
      font-size: 25px;
      color: #FFFFFF;
    }
    h3 {
      font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    }
    h4{
      font-weight: normal;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
    h5{
    font-size: 12px;
    font-weight: normal;
    margin-left: 80px;
    color: rgba(255, 255, 255, 0.5);
    }
    div#logoenome{
      display: flex;
      align-items: center;
    }
    div#logoenome img{
      width: 26.5px;
      height: 26.5px;
      margin:8px 6px -5px 8px;
    }

    .mostrarsaldo{
      margin: 10px 0px 0px 80px;
      h2#mask{
        display: none;
      }
      h2#saldo {
        display: block;
      }
       button{
        border: none;
        background:none;
        position: absolute;
        margin-left: 170px;
      }
      button:hover{
        cursor: pointer;
      }
    }
    .nao-mostrarsaldo{
      h2#saldo{
        display: none
      }
      h2#mask {
        display: block
      }
    }

.buttondiv{
      margin-left: 60px
    }
}

@media (min-width:600px){
  nav {
    margin:0px;
    width: 220px;
  }
  #navinfos{
    position: absolute;
    margin-left: 50px;
      button{
        margin-left: 10px;
      }
    }
  div#wellcomediv{
    margin-left: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }



`;
