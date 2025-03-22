type ProfileProps = {
    greeting: string;
    info: string;
}

function Profile ({greeting, info}: ProfileProps) {
    return(
        <div className="flex justify-between items-center">
            <div>
                <p className="text-left">{greeting}</p>
                <p className="text-left text-xl font-bold">{info}</p>
            </div>
        </div>
    );
}

export default Profile;