<template>
  <header class="header">
    <div class="top shadow">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 text-left">
              <a><i class="fa fa-envelope contact_social-icon" aria-hidden="true"></i>ayten.agayeva17@gmail.com</a>
              <a><i class="fa fa-phone contact_social-icon" aria-hidden="true"></i>(+994)55 361 94 91</a>
            </div>
            <div class="col-xl-6 text-right">
              <a href="https://www.facebook.com/ayten.agayeva17" target="_blank" class="contact_social-link"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/ayten.agayeva17/" target="_blank" class="contact_social-link"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-4">
                <h1 class="logo">
                  <router-link to="/"><img src="../assets/logo.png"/></router-link>
              </h1> 
            </div>
            <div class="col-xl-8 right-side">
                <div id="nav">
                    <router-link to="/about">About</router-link>   
                    <router-link to="/profile">Portfolio</router-link>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader"
};
</script>

<style scoped lang="scss">
  .header {
    background-color: #313131;
    height: 150px;
    margin-bottom: 50px;
    @media (max-width: 1140px) {
      height: 80px;
    }
    .top {
        height: 60px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #777;
      .row {
        height: auto !important;
        a {
          margin-right: 20px;
        }
        .text-right {
          a {
            &:last-child {
              margin-right: 0;
            }
            i {
              -webkit-transition: all .3s ease-in-out;
              transition: all .3s ease-in-out;
            }
            &:hover {
              i {
                transform: scale(1.2);
              }
            }
          }
        }
        .text-left {
          a {
            i {
              padding-right: 8px;
            }
          }
        }
      }
    }
    .container {
      .row {
        height: 100px;
        align-items: center;
      }
    }
    .logo{
        margin-bottom: 0;
        margin-top: 0;
        text-align: left;
        @media (max-width: 1140px) {
            margin-top: 15px;
            height: 60%;
        }
        a{
            display: block;
            height: 70px;
            width: 230px;
            img{
                height: 100%;
                width: auto;
            }
            @media (max-width: 1140px) {
                height: 100%;
                width: auto;
                display: inline-block;
            }
        }
    }
    .right-side {
      #nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0;
        a {
          color: #fff;
          margin-left: 30px;
          text-decoration: none;
        }
      }
    }
  }

</style>
