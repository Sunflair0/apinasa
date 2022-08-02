import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate (-1);

    return (
        <section>
            <h1>Unauthorized</h1>
            <br/>
            <p>Turn Back!  Muhahahaha</p>
            <div>
                <button onclick={goBack}>Go Back</button>
            </div>
        </section>

    )
}
export default Unauthorized