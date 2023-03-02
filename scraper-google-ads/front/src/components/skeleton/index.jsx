import styles from './main.module.css';
import { MoonLoader } from 'react-spinners'

export const ComponentSkeleton = () => {
  return (
    <>
      <div className={styles.skeletonContainer}>
        <MoonLoader className='spinning' color="#36d7b7" />
      </div>
    </>
  )
}