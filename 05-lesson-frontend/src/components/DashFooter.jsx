import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

export const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate('/dash');

  const content = (
    <footer className='dash-footer'>
      {pathname !== '/dash' ? (
        <button className='dash-footer__button icon-button' title='Home' onClick={onGoHomeClicked}>
          <FontAwesomeIcon icon={faHouse} />
        </button>
      ) : null}
      <p>Current User:</p>
      <p>Status:</p>
    </footer>
  );
  return content;
};
