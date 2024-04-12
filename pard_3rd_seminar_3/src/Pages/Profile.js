import { useParams} from "react-router-dom";

const data = {
    Pmj: {
        name: "박민지",
        description: "파드 3기 웹 파트장"
    }, 
    Kki: {
        name: "김광일",
        description: "파드 3기 웹 부파트장"
    }
}

function Profile () {
    const params = useParams(); //URL 정보를 가져옴.
    const profile = data[params.username];
    return (
        <div>
            <h1>사용자 프로필</h1>
            {
                profile
                ? (
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.description}</p>
                    </div>
                )
                : <p>존재하지 않는 프로필입니다.</p>
            }

        </div>
    );
};

export default Profile;