export type RootStackParamList = {
  Home: undefined;
  Connexion: undefined;
  Register: undefined;
  RegisterSecond: {
    lastName: string;
    firstName: string;
    phoneNumber: string;
  };
  Login: undefined;
  Search: {
    searchParams: {
      depart: string;
      destination: string;
      date: Date;
    };
  };
  DeparturePublish: undefined;
  ArrivalPublish: {
    depart: string;
  };
  DetailsPublish: {
    depart: string;
    arrival: string;
  };
  StatusPublish: {
    status: string;
  };
  Profil: undefined;
  UpdateProfil: undefined;
};

export type SearchParams = {
  depart: string;
  destination: string;
  date: Date;
};

export type Traject = {
  id: number;
};

export type InputBarProps = {
  onChangeText: (text: string) => void;
  value: string;
  placeholder?: string;
};