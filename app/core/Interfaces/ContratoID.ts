export interface Contrato {
    address: string
    address_tax: string
    balance: number
    bank_associated: BankAssociated
    client: number
    client_email: string
    client_mobile: string
    client_name: string
    client_name_lastname: string
    client_name_name: string
    client_phone: string
    client_type: number
    client_type_name: string
    contract_detail: ContractDetail[]
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
  
  export interface BankAssociated {
    bank: number
    bank_name: string
    id: number
    nro_cta: string
    status: boolean
    tlf: string
  }
  
  export interface ContractDetail {
    contract: number
    contract_detail_account: any
    contract_detail_package: any[]
    contract_detail_product: any[]
    id: number
    nodo: any
    nodo_name: any
    plan: Plan
    plan_corpor: any
    service_detail: ServiceDetail[]
    service_type: ServiceType
    status: number
  }
  export interface Plan {
    client_type: number
    code: string
    cost: string
    description: string
    id: number
    image: any
    name: string
    profile: string
  }
  export interface ServiceType {
    description: string
    id: number
    name: string
    services: any[]
  }

  export interface ServiceDetail {
    contract_detail: number
    id: number
    ip: string
    mac: string
    nap_box_coordinate: string
    nap_box_id: number
    nap_box_name: string
    nap_port: string
    pppassw: any
    ppuser: any
    product: any
    redIPV4: string
    serial: string
    smart_olt: any
  }
  
  