
const InfoCard = ({icon,cardTitle,bgClass}) => {
    return (
        <div className={`card lg:card-side shadow-xl p-2 m-2 ${bgClass}`}>
            <figure className="p-2"><img src={icon} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
         
            </div>
        </div>
    );
};

export default InfoCard;