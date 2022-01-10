
import style from './auth.module.css';

function AuthBlock() {
  return (
   <div className={style.authBlock}>
    <div className={style.wrapOptions}>
        <h2 className={style.authOption}>Login</h2>
        <h2 className={style.authOption}>registration</h2>
    </div>
   </div>
  )
};

export default AuthBlock;