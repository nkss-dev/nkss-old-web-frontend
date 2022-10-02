export type Student = {
  roll_number: number;
  section: string;
  name: string;
  gender: {
    String: string,
    Valid: boolean;
  };
  mobile: {
    String: string,
    Valid: boolean
  };
  birth_date: {
    Time: string;
    Valid: boolean
  };
  email: string;
  batch: number;
  hostel_id: string;
  room_id: {
    String: string
    Valid: boolean;
  };
  discord_id: {
    Int64: number;
    Valid: boolean
  };
  is_verified: boolean;
  clubs: [
    {
      name: string;
      position: string;
    }
  ]
}