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
      <h2>How it works</h2>
      <div className={style.steps}>
          <div className={`${style.howBlock_step} ${style.c1}`}>
          <DatabaseOutlined />
            Registration
            </div>
          <div className={`${style.howBlock_step} ${style.c2}`}>
          <FileDoneOutlined />
            Fill in your profile
            </div>
          <div className={`${style.howBlock_step} ${style.c3}`}>
          <PictureOutlined />
            Create an album</div>
          <div className={`${style.howBlock_step} ${style.c4}`}>
          <CloudUploadOutlined />
            Load photos
          </div>
          <div className={`${style.howBlock_step} ${style.c1}`}>
          <LinkOutlined />
            Get the link to share
            </div>
        </div>
    </div>
  )
};

export default HowBlock;