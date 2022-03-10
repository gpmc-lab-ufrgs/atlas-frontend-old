import { ModalContainer } from "@components/Modal";
interface Person {
  name: string
  image: string
  function: string
  institution: string
}

const contributors: Person[] = [
  {
    name: 'Vinicius Brei', 
    image: require('../../../assets/vinicius_brei.jpg'),
    function: '',
    institution: ''
  },
  {
    name: 'Alex Sandy Pentland', 
    image: require('../../../assets/alex_sandy.png'),
    function: '',
    institution: ''
  },
  {
    name: 'Mohsen Bahrami', 
    image: require('../../../assets/mohsen_bahrami.png'),
    function: '',
    institution: ''
  },
  {
    name: 'Alina Flores', 
    image: require('../../../assets/alina_flores.png'),
    function: '',
    institution: ''
  },
  {
    name: 'Ricardo Limongi', 
    image: require('../../../assets/ricardo_limongi.png'),
    function: '',
    institution: ''
  },
  {
    name: 'Leonardo Gomes', 
    image: require('../../../assets/leonardo_gomes.jpg'),
    function: '',
    institution: ''
  },
  {
    name: 'Justin Anderson', 
    image: require('../../../assets/justin_anderson.png'),
    function: '',
    institution: ''
  },
  {  
    name: 'Enzo Gabriel', 
    image: require('../../../assets/enzo_gabriel.jpg'),
    function: '',
    institution: '',
  },
  {
    name: 'Valderson Junior', 
    image: require('../../../assets/valderson_junior.png'),
    function: '',
    institution: '',
  },
  {
    name: 'Ana Luisa', 
    image: require('../../../assets/avatar_icon.svg'),
    function: '',
    institution: ''
  },

  {
    name: 'Andreon Magagna', 
    image: require('../../../assets/andreon_magagna.png'),
    function: '',
    institution: ''
  },  

  {
    name: 'Carla Netto', 
    image: require('../../../assets/carla_netto.jpg'),
    function: '',
    institution: ''
  },
  {
    name: 'Jaiany Rocha', 
    image: require('../../../assets/jaiany_rocha.png'),
    function: '',
    institution: ''
  },
  {
    name: 'Jheniffer Dany Lucas', 
    image: require('../../../assets/jheniffer_lucas.jpg'),
    function: '',
    institution: ''
  },
  {
    name: 'Luís Eduardo Meneguetti', 
    image: require('../../../assets/luis_meneguetti.jpg'),
    function: '',
    institution: '',
  },
  {
    name: 'Thales Martins', 
    image: require('../../../assets/avatar_icon.svg'),
    function: '',
    institution: ''
  },
  {
    name: 'Vilmar Oro Boff', 
    image: require('../../../assets/vilmar_boff.png'),
    function: '',
    institution: ''
  },
]

const Contributors = () => {

  return (
    <ModalContainer title="Contributors">
      <></>
    </ModalContainer>
  );
};

export default Contributors;