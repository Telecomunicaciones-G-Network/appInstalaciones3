export interface ResultsOrdenes {
    count: number
    next: any
    previous: any
    results: Ordenes[]
  }
  
  export interface Ordenes {
    building: any
    city: number
    client: number
    client_identification: string
    client_name: string
    client_type_name: string
    confirmation: boolean
    contract: number
    created_at: string
    created_by_name: string
    detail: string
    end: string
    finish_date: any
    group: number
    group_color: string
    group_name: string
    id: number
    invoice_payment: InvoicePayment[]
    municipality: number
    nap_box: number
    option: number
    option_name: string
    order: string
    parish: number
    payment: boolean
    plan_name: string
    port: number
    sector: number
    sector_name: string
    seller: any
    send_wss: boolean
    site: string
    start: string
    state: number
    status: number
    status_name: string
    vip: boolean
    zone: number
    zone_name: string
  }
  export interface InvoicePayment {
    invoice: number
    invoice_status_id: number
    invoice_status_name: string
  }