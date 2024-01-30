import { Button } from './styles';

interface SwitchThemeProps {
  onClick: () => void;
}

const SwitchThemeButton = ({ onClick }: SwitchThemeProps) => {
  return <Button onClick={onClick}>Mudar Tema</Button>;
};

export default SwitchThemeButton;
