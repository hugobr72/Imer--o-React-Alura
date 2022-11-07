import styled from 'styled-components'
import config from '../config.json'

const StyledHeader = styled.div`
  padding-top: 54px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} alt={config.name} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header