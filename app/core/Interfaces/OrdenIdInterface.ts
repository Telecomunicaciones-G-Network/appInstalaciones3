export interface OrdenId {
    building: any
    city: City
    client: Client
    client_type_name: any
    confirmation: boolean
    contract: Contract
    created_at: string
    created_by_name: string
    detail: string
    end: string
    finish_date: any
    group: Group
    id: number
    image_order: ImageOrder[]
    municipality: Municipality
    nap_box: number
    option: number
    option_name: string
    order: string
    order_detail: OrderDetail[]
    parish: Parish
    payment_detail: PaymentDetail[]
    port: number
    sector: Sector
    seller_name: any
    send_wss: boolean
    start: string
    state: State
    status: number
    status_name: string
    vip: boolean
    zone: Zone
  }
  
  export interface City {
    capital: boolean
    id: number
    name: string
    state: number
  }
  
  export interface Client {
    email: string
    id: number
    identification: string
    last_name: string
    mobile: string
    name: string
    phone: string
  }
  
  export interface Contract {
    address: string
    address_tax: string
    balance: number
    bank_associated: number
    client: number
    client_email: string
    client_mobile: string
    client_name: string
    client_name_lastname: string
    client_name_name: string
    client_phone: string
    client_type: number
    client_type_name: string
    created_at: string
    created_by_name: string
    cycle: number
    debt: number
    finish_installation: any
    id: number
    identification: string
    installation_order: string
    latitude: string
    longitude: string
    migrate: boolean
    nap_box_id: number
    nap_box_name: string
    order_id: number
    parish_name: string
    sector_name: string
    signe: any
    signe_base64: any
    status: number
    status_name: string
  }
  
  export interface Group {
    created_at: string
    created_by: any
    created_by_name: any
    id: number
    name: string
    state: number
    state_name: string
    status: number
    status_name: string
    ubication: number
    ubication_name: string
    vip: boolean
    zone_groups: any[][]
  }
  
  export interface Municipality {
    city: number
    id: number
    name: string
  }
  
  export interface OrderDetail {
    created_at: string
    created_by: number
    created_by_name: string
    detail: string
    id: number
    order: number
  }
  
  export interface Parish {
    id: number
    municipality: number
    name: string
    ubication: number
    ubication_name: string
    zone: number
    zone_name: string
  }
  
  export interface PaymentDetail {
    amount: string
    amount_bs: number
    date: string
    id: number
    invoice: any[]
    payment: any[]
  }
  
  export interface Sector {
    id: number
    name: string
    parish: number
    router: number
    sale: boolean
    zone: number
    zone_name: string
  }
  
  export interface State {
    code: string
    country: string
    id: number
    name: string
  }
  
  export interface Zone {
    active: boolean
    available: boolean
    id: number
    name: string
    state: number
    ubication_zones: any[][]
  }
  
  export interface ImageOrder {
    detail: string
    id: number
    image: string
    order: string
  }
  