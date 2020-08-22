import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr >
                        <td style={{ padding: "20px" }}>
                            Products
                        </td>
                        <td style={{ padding: "20px" }}>
                            Size
                        </td>
                        <td style={{ padding: "20px" }}>
                            Quantity
                        </td>
                        <td style={{ padding: "20px" }}>
                            Total Price
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <h5 style={{ marginBottom: " 5px " }}>Henley T-Shirt</h5>
                                <small>Roadster</small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <select>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <small>
                                    -
                                </small>
                                <small>
                                    2
                                </small>
                                <small>
                                    +
                                </small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            $55.66
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <h5 style={{ marginBottom: " 5px " }}>Henley T-Shirt</h5>
                                <small>Roadster</small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <select>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <small>
                                    -
                                </small>
                                <small>
                                    2
                                </small>
                                <small>
                                    +
                                </small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            $55.66
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <h5 style={{ marginBottom: " 5px " }}>Henley T-Shirt</h5>
                                <small>Roadster</small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <select>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <small>
                                    -
                                </small>
                                <small>
                                    2
                                </small>
                                <small>
                                    +
                                </small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            $50.2
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <h5 style={{ marginBottom: " 5px " }}>Henley Jeans</h5>
                                <small>Roadster</small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div>
                                <select>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <small>
                                    -
                                </small>
                                <small>
                                    5
                                </small>
                                <small>
                                    +
                                </small>
                            </div>
                        </td>
                        <td style={{ padding: "20px" }}>
                            $20.66
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
