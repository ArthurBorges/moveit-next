import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent.faqa1-1.fna.fbcdn.net/v/t1.0-9/64740166_2804762186217112_2045745407585157120_o.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGSrV0ySo8fjGEeZwYhJZX7hEHp4nqTG8KEQeniepMbwvtr1mRg7z5WZu53nrNGD8fWNOSnKBomyt9HXQkb75w0&_nc_ohc=QXC678kwYGwAX_ac-rq&_nc_ht=scontent.faqa1-1.fna&oh=1b2281357d4d3e50e282dd097596546a&oe=6059F29B" alt="Arthur Borges"/>
            <div>
                <strong>Arthur Borges</strong>
                <p>
                <img src="icons/level.svg" alt="level"/>
                Level 1
                </p>
            </div>
        </div>
    )
}