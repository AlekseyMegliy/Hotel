<template>
    <div class="conteiner home-form">
        <div class="row">
            <div class="video col-md-6">
                <iframe class="col-12" title="vimeo-player" src="https://player.vimeo.com/video/55057393?h=fe0df60a3b" width="700" height="420" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="form col-md-3">
                <h2>Reservation</h2>
                <form>
                    <input class="col-12" placeholder="Name" id="name" type="text" name="name">
                    <input class="col-12" placeholder="Email" id="email" type="email" name="email">
                    <input class="col-12" placeholder="Phone" id="phone" type="number" name="phone" >
                    <div class="col-12 selectors">
                       <select class="select-number">
                        <option>No. of Rooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select class="select-number">
                        <option>No. of Adult</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select> 
                    <select class="select-date">
                        <option>Date</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select class="select-date">
                        <option>Mounth</option>
                        <option>Jan (1)</option>
                        <option>Feb (2)</option>
                        <option>Mar (3)</option>
                        <option>Apr (4)</option>
                        <option>May (5)</option>
                        <option>June (6)</option>
                        <option>July (7)</option>
                        <option>Aug (8)</option>
                        <option>Sep (9)</option>
                        <option>Oct (10)</option>
                        <option>Nov (11)</option>
                        <option>Dec (12)</option>
                    </select>
                    <select class="select-date">
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                    </select>
                    </div>
                    <textarea class="col-12" rows="3" placeholder="Message"></textarea>
                    <input type="submit" value="Submit" class="col-2 col-md-4">
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.home-form{
    margin: 100px 0;
}
.home-form .row{
    width: 100%;
    justify-content: center;
    display: flex;
}
.home-form .video{
    padding: 0 10px;
    text-align: end;
}
.home-form iframe{
    margin: 0;
    padding: 0;
  
}
.home-form .form{
    padding:10px;
   
    justify-content: space-between;
}
.home-form .form h2{
    font-size: 1.5em;
    margin-bottom: 0.7em;
    font-family: 'Old Standard TT', serif;
    line-height: 1em;
    color: rgb(120, 118, 118);
}
.home-form .form input{
    margin-bottom: 15px;
    padding: 5px 10px ;
    font-size: 0.9em;
  
    font-family: 'Raleway', sans-serif;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.home-form .form .selectors{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.home-form .form .selectors select{
    cursor: pointer;
    margin-bottom: 15px;
    padding: 5px 10px ;
    font-size: 0.9em;
    opacity: 0.6;
    transition: opacity linear 0.2s;
}
.home-form .form .selectors select:hover{
    opacity: 1;
    font-weight: 600;
}

.home-form .form .selectors select option{
    padding: 10px;
    font-size: 0.8em;
    font-family:Arial, Helvetica, sans-serif;
}
.home-form .form .selectors .select-number{
   width: 47%;
}
.home-form .form .selectors .select-date{
   width: 30%;
}
.home-form .form textarea{
    font-family: 'Raleway', sans-serif;
    padding: 5px 10px;
}
.home-form .form input[type=submit]{
    background-color: #bfa145;
    transition: all 0.3s ease-in-out;
    color: white;
    border: none;
    padding: 7px;
}
.home-form .form input[type=submit]:hover{
    background-color: #756534;
   
   
}
</style>