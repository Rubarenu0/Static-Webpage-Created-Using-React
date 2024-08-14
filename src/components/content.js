import './header.css';
function Content(){
    return(
        <div>
            <h1 style={{marginLeft:"500px"}}>Welcome To My Website!!!</h1>
        <table>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Dep</th>
            <th>College</th>
            <th>Year Of Passed Out</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Ruba</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Ramu</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Janani</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Gowtham</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Krish</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
        </tr>
        </table>
        <form>
        <label>username:</label>
        <input type='text' placeholder='enter your username' required/>
        <label>Password:</label>
        <input type='text' placeholder='enter your Password' required/><br/>
        <button>Login</button>
        </form>
    </div>
    )
}
export default Content;