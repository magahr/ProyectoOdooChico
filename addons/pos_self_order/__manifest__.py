# -*- coding: utf-8 -*-
{
    "name": "POS Self Order",
    'version': '1.0',
    "summary": "Addon for the POS App that allows customers to view the menu on their smartphone.",
    "category": "Sales/Point Of Sale",
    "depends": ["pos_restaurant", "http_routing"],
    "auto_install": ["pos_restaurant"],
    "data": [
        "security/ir.model.access.csv",
        "views/pos_self_order.index.xml",
        "views/qr_code.xml",
        "views/pos_category_views.xml",
        "views/pos_config_view.xml",
        "views/pos_session_view.xml",
        "views/custom_link_views.xml",
        "views/pos_restaurant_views.xml",
        "views/product_views.xml",
        "data/init_access.xml",
        "views/res_config_settings_views.xml",
        "views/point_of_sale_dashboard.xml",
    ],
    "demo": [
        "data/kiosk_demo_data.xml",
    ],
    "assets": {
        # Assets
        'point_of_sale._assets_pos': [
            'pos_self_order/static/src/overrides/**/*',
        ],
        'web.assets_backend': [
            "pos_self_order/static/src/upgrade_selection_field.js",
        ],
        "pos_self_order.assets": [
            "pos_self_order/static/src/app/primary_variables.scss",
            "pos_self_order/static/src/app/bootstrap_overridden.scss",
            ("include", "point_of_sale.base_app"),
            'web/static/src/core/currency.js',
            'barcodes/static/src/barcode_service.js',
            'point_of_sale/static/src/utils.js',
            'web/static/lib/bootstrap/js/dist/util/index.js',
            'web/static/lib/bootstrap/js/dist/dom/data.js',
            'web/static/lib/bootstrap/js/dist/dom/event-handler.js',
            'web/static/lib/bootstrap/js/dist/dom/manipulator.js',
            'web/static/lib/bootstrap/js/dist/dom/selector-engine.js',
            'web/static/lib/bootstrap/js/dist/util/config.js',
            'web/static/lib/bootstrap/js/dist/util/swipe.js',
            'web/static/lib/bootstrap/js/dist/base-component.js',
            "web/static/lib/bootstrap/js/dist/carousel.js",
            'web/static/lib/bootstrap/js/dist/scrollspy.js',
            'web_editor/static/src/js/editor/odoo-editor/src/base_style.scss',
            'web_editor/static/src/scss/web_editor.common.scss',
            "point_of_sale/static/src/app/generic_components/numpad/*",
            "point_of_sale/static/src/app/generic_components/product_card/*",
            "point_of_sale/static/src/app/generic_components/order_widget/*",
            "point_of_sale/static/src/app/generic_components/orderline/*",
            "point_of_sale/static/src/app/generic_components/centered_icon/*",
            "point_of_sale/static/src/css/pos_receipts.css",
            "point_of_sale/static/src/app/screens/receipt_screen/receipt/**/*",
            "pos_self_order/static/src/overrides/components/receipt_header/*",
            "point_of_sale/static/src/app/utils/printer/base_printer.js",
            "point_of_sale/static/src/app/services/printer_service.js",
            'point_of_sale/static/src/app/utils/html-to-image.js',
            "point_of_sale/static/src/app/services/render_service.js",
            "pos_self_order/static/src/app/**/*",
            "point_of_sale/static/src/app/utils/printer/hw_printer.js",
            "web/static/src/core/utils/render.js",
            "pos_self_order/static/src/app/store/order_change_receipt_template.xml",
            "account/static/src/helpers/*.js",
            "web/static/src/views/fields/parsers.js",

            # Related models from point_of_sale
            "point_of_sale/static/src/app/models/data_service_options.js",
            "point_of_sale/static/src/app/models/utils/indexed_db.js",
            "point_of_sale/static/src/app/models/related_models.js",
            "point_of_sale/static/src/app/services/data_service.js",
            "point_of_sale/static/src/app/models/**/*",
            "pos_restaurant/static/src/app/models/restaurant_table.js"
        ],
        # Assets tests
        "pos_self_order.assets_tests": [
            ("include", "point_of_sale.base_tests"),
            "pos_self_order/static/tests/**/*",
            "point_of_sale/static/tests/tours/utils/numpad_util.js",
        ],
    },
    "license": "LGPL-3",
}
