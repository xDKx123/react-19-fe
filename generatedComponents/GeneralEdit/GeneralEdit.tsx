import React, { FC } from 'react';
import styles from './GeneralEdit.module.scss';

interface GeneralEditProps {}

const GeneralEdit: FC<GeneralEditProps> = () => (
  <div className={styles.GeneralEdit}>
    GeneralEdit Component
  </div>
);

export default GeneralEdit;
