import './FormDone.scss';
import {memo} from 'react';
import { useTranslation } from 'react-i18next'
const FormDone = memo(({resOK}) =>{
    const { t } = useTranslation();
    return (
        <div  className="form-card-done">
                {resOK? <h2>{t('formDone.successPart1')}<br></br>{t('formDone.successPart2')}</h2> : <h2>{t('formDone.fail')}</h2>}
        </div>
    )
})

export default FormDone