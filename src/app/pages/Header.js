export const Header = (props) => {

  const onLoginClick = () => {
    props.history.push('/login');
  }

  const onLogoClick = () => {
    props.history.push('/');
  }

  return (
    <div className="header">
      <div onClick={onLogoClick}>Logo</div>
      <div onClick={onLoginClick}>Login</div>
    </div>
  )
}
