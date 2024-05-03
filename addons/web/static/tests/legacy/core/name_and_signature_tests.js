/** @odoo-module alias=@web/../tests/core/name_and_signature_tests default=false */

import { hotkeyService } from "@web/core/hotkeys/hotkey_service";
import { popoverService } from "@web/core/popover/popover_service";
import { registry } from "@web/core/registry";
import { NameAndSignature } from "@web/core/signature/name_and_signature";
import { makeTestEnv } from "../helpers/mock_env";
import { click, editInput, getFixture, mount, nextTick } from "../helpers/utils";
import { patchRPCWithCleanup } from "../helpers/mock_services";

const serviceRegistry = registry.category("services");

let env;
let target;
let props;

const getNameAndSignatureButtonNames = (target) => {
    return [...target.querySelectorAll(".card-header .col-auto")].reduce((names, el) => {
        const text = el.textContent.trim();
        if (text) {
            names.push(text);
        }
        return names;
    }, []);
};

QUnit.module("Components", ({ beforeEach }) => {
    beforeEach(async () => {
        patchRPCWithCleanup((route) => {
            if (route === "/web/sign/get_fonts/") {
                return {};
            }
        });
        serviceRegistry.add("hotkey", hotkeyService);
        serviceRegistry.add("popover", popoverService);

        target = getFixture();
        const signature = {};
        props = {
            signature,
        };
        env = await makeTestEnv();
    });

    QUnit.module("NameAndSignature");

    QUnit.test("test name_and_signature widget", async (assert) => {
        const defaultName = "Don Toliver";
        props.signature.name = defaultName;
        await mount(NameAndSignature, target, { env, props });
        assert.deepEqual(getNameAndSignatureButtonNames(target), ["Auto", "Draw", "Load"]);
        assert.containsOnce(
            target,
            ".o_web_sign_auto_select_style",
            "should show font selection dropdown"
        );
        assert.containsOnce(target, ".card-header .active");
        assert.strictEqual(target.querySelector(".card-header .active").textContent.trim(), "Auto");
        assert.containsOnce(target, ".o_web_sign_name_group input");
        assert.strictEqual(target.querySelector(".o_web_sign_name_group input").value, defaultName);

        await click(target, ".o_web_sign_draw_button");
        assert.deepEqual(getNameAndSignatureButtonNames(target), ["Auto", "Draw", "Load"]);
        assert.containsOnce(target, ".o_web_sign_draw_clear");
        assert.containsOnce(target, ".card-header .active");
        assert.strictEqual(target.querySelector(".card-header .active").textContent.trim(), "Draw");

        await click(target, ".o_web_sign_load_button");
        assert.deepEqual(getNameAndSignatureButtonNames(target), ["Auto", "Draw", "Load"]);
        assert.containsOnce(target, ".o_web_sign_load_file");
        assert.containsOnce(target, ".card-header .active");
        assert.strictEqual(target.querySelector(".card-header .active").textContent.trim(), "Load");
    });

    QUnit.test("test name_and_signature widget without name", async (assert) => {
        await mount(NameAndSignature, target, { env, props });
        assert.containsNone(target, ".card-header");
        assert.containsOnce(target, ".o_web_sign_name_group input");
        assert.strictEqual(target.querySelector(".o_web_sign_name_group input").value, "");

        await editInput(target, ".o_web_sign_name_group input", "plop");
        await nextTick();
        assert.deepEqual(getNameAndSignatureButtonNames(target), ["Auto", "Draw", "Load"]);
        assert.containsOnce(target, ".o_web_sign_auto_select_style");
        assert.strictEqual(target.querySelector(".card-header .active").textContent.trim(), "Auto");
        assert.containsOnce(target, ".o_web_sign_name_group input");
        assert.strictEqual(target.querySelector(".o_web_sign_name_group input").value, "plop");

        await click(target, ".o_web_sign_draw_button");
        assert.containsOnce(target, ".card-header .active");
        assert.strictEqual(target.querySelector(".card-header .active").textContent.trim(), "Draw");
    });

    QUnit.test(
        "test name_and_signature widget with noInputName and default name",
        async function (assert) {
            const defaultName = "Don Toliver";
            props = {
                ...props,
                noInputName: true,
            };
            props.signature.name = defaultName;
            await mount(NameAndSignature, target, { env, props });
            assert.deepEqual(getNameAndSignatureButtonNames(target), ["Auto", "Draw", "Load"]);
            assert.containsOnce(target, ".o_web_sign_auto_select_style");
            assert.containsOnce(target, ".card-header .active");
            assert.strictEqual(
                target.querySelector(".card-header .active").textContent.trim(),
                "Auto"
            );
        }
    );

    QUnit.test(
        "test name_and_signature widget with noInputName and without name",
        async function (assert) {
            props = {
                ...props,
                noInputName: true,
            };
            await mount(NameAndSignature, target, { env, props });
            assert.deepEqual(getNameAndSignatureButtonNames(target), ["Draw", "Load"]);
            assert.containsOnce(target, ".o_web_sign_draw_clear");
            assert.containsOnce(target, ".card-header .active");
            assert.strictEqual(
                target.querySelector(".card-header .active").textContent.trim(),
                "Draw"
            );
        }
    );

    QUnit.test(
        "test name_and_signature widget update signmode with onSignatureChange prop",
        async function (assert) {
            const defaultName = "Noi dea";
            let currentSignMode = "";
            props = {
                ...props,
                onSignatureChange: function (signMode) {
                    if (currentSignMode !== signMode) {
                        currentSignMode = signMode;
                        assert.step(signMode);
                    }
                },
            };
            props.signature.name = defaultName;
            await mount(NameAndSignature, target, { env, props });
            await click(target, ".o_web_sign_draw_button");
            assert.verifySteps(["auto", "draw"], "should be draw");
        }
    );
});
