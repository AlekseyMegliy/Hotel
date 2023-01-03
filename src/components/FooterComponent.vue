<template>
    <div class="conteiner footer">
        <div class="row">
            <div class="offset-md-1 col-md-4 footer-info">
                <h2>Holiday Crown</h2>
                <p>Holiday Crown was these three and songs arose whose. 
                    Of in vicinity contempt together in possible branched. 
                    Assured company hastily looking garrets in oh. Most have 
                    love my gone to this so. Discovered interested prosperous 
                    the our affronting insipidity day. Missed lovers way one vanity 
                    wishes nay but. Use shy seemed within twenty wished old few regret passed. 
                    Absolute one hastened mrs any sensible.</p>
            </div>
            <div class="col-md-3 footer-info">
                <h2>Quick Links</h2>
                <RouterLink to="/">
                    Home
                </RouterLink>
                <RouterLink to="/rooms">
                    Rooms & Tariff
                </RouterLink>
                <RouterLink to="/introduction">
                    Introduction
                </RouterLink>
                <RouterLink to="/gallery">
                    Gallery
                </RouterLink>
                <RouterLink to="/gallery">
                    Tour Packages
                </RouterLink>
                <RouterLink to="/contact">
                    Contact
                </RouterLink>
            </div>
            <div class="col-md-4 footer-info">
                <h2>Subscription</h2>
                <input type="email" placeholder="Enter email id here" class="col-8 col-md-5 col-lg-6">
                <input type="submit" value="Get Notify"  class="col-4 col-md-4 col-lg-3">
                <div class="social col-10">
                    <a href="#"><img width="27px" src="@/assets/social/fb.png"></a>
                    <a href="#"><img width="30px" src="@/assets/social/in.png"></a>
                    <a href="#"><img width="30px" src="@/assets/social/inst.png"></a>
                    <a href="#"><img width="30px" src="@/assets/social/pin.png"></a>
                    <a href="#"><img width="30px" src="@/assets/social/tw.png"></a>
                    <a href="#"><img width="30px" src="@/assets/social/yt.png"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>

<style>
.footer{
    background-color: #585650;
}
.footer .row{
    width: 100%;
    text-align: center;
    padding: 0 0 5em 1.25em;
}
.footer-info{
    text-align: left;
    padding: 3em 2em 0em 1em ;
}
.footer-info h2{
    text-transform:capitalize;
    font-size: 1.25em;
    color: #DCDCDC;
    font-size: 1.25em;
    margin-bottom: 0.75em;
    font-family: 'Old Standard TT', serif;
    line-height: 1em;
}

.footer-info p{
    line-height: 1.5em;
    font-size: 0.85em;
    color: #AEAEAC;
}
.footer-info a{
    text-decoration: none;
    line-height: 1.5em;
    font-size: 0.85em;
    color: #AEAEAC;
    transition: color linear 0.2s;
    margin-top: auto;
    margin-bottom: auto;
    display: block;
}
.footer-info a:hover{
    color: #ffffff;
}
.footer-info input[type='email']{
    color: #DCDCDC;
    font-size: 0.9em;
    padding: 3px;
    border: none;
}
.footer-info input[type='submit']{
    color:  #ffffff;
    font-size: 0.9em;
    background-color: #bfa145;;
    border: none;
    padding: 3px;
}
.social{
    margin-top: 1em;
}
.social a{
    display: inline;
    filter: invert(100%);
    -webkit-filter:invert(100%);
    opacity: 0.6;
    margin: 0 0.2em;
    transition: opacity linear 0.2s;
}
.social a:hover{
    opacity: 1;
}
</style>