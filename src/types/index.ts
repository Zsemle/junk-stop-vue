/* eslint-disable camelcase */

export interface Order {
  order_id: string,
  stream_product_id: number,
  stream_type: string,
  quantity: number,
  size: number,
  status: number,
  type: number

}

export interface Address {
  house_number: string,
  street: string,
  town: string,
  postal_code: string,
  country: string,
  lat: number,
  lon: number
}

export interface Stop {
  stop_id: number | null | null,
  status: number | null,
  name: string | null,
  comment: string | null,
  avatar: string | null,
  telephone: string | null,
  address: Address,
  eta:string | null,
  time_start: string | null,
  time_end: string | null,
  orders: Array<Order>,
}

export interface DriverRoute {
  stops: Array<Stop>,
  name: string | null,
  orglog_id: string | null,
  vehicle_id: string | null,
  driver_id: string | null,
  time_start: string | null,
  time_end: string | null,
  status: number | null,
  depots: Array<Object> | null,
  garage: Object | null,
  _created: string | null,
  _modified: string | null,
  _active: boolean | null,
}
