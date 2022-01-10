import style from './howBlock.module.css';
import { 
  DatabaseOutlined, 
  PictureOutlined, 
  FileDoneOutlined,
  CloudUploadOutlined,
  LinkOutlined 
} from '@ant-design/icons';
function HowBlock() {
  return (
    <div className={style.howBlock}>
      <h2 className={style.title}>How it works</h2>
      <div className={style.steps}>
          <div className={`${style.howBlock_step} ${style.c1}`}>
            <div className={`${style.arrow} ${style.c1}`}></div>
            <DatabaseOutlined className={style.iconStyle} />
            Registration
            </div>
          <div className={`${style.howBlock_step} ${style.c2}`}>
          <FileDoneOutlined className={style.iconStyle} />
            Fill in your profile
            </div>
          <div className={`${style.howBlock_step} ${style.c3}`}>
            <PictureOutlined className={style.iconStyle} />
            Create an album
          </div>
          <div className={`${style.howBlock_step} ${style.c4}`}>
          <CloudUploadOutlined className={style.iconStyle} />
            Load photos
          </div>
          <div className={`${style.howBlock_step} ${style.c1}`}>
          <LinkOutlined className={style.iconStyle} />
            Get the link
            </div>
        </div>
    </div>
  )
};

export default HowBlock;