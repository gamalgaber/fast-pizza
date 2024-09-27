import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const className =
    'disabled:curser-not-allowed inline-block rounded-full bg-yellow-400 px-3 py-4 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:px-6 sm:py-4';
  const base =
    'text-sm disabled:curser-not-allowed inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 md:px-5 md:py-2.5 px-4 text-xs',
    secondary:
      'disabled:curser-not-allowed text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-800 hover:text-white focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 sm:px-6 sm:py-3 px-3 py-2.5 md:px-6 md:py-3.5',
    round: base + ' py-1 md:px-3.5 md:py-2 px-2.5 text-sm',
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
