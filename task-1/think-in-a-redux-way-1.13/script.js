// select dom elements
const addMatchEl = document.getElementById("addMatch");
const resetEl = document.getElementById("resetButton");

// action identifiers
const ADDMATCH = "ADD_MATCH";
const INCREAMENT = "UPDATE_INCREAMENT";
const DCREAMENT = "UPDATE_DCREAMENT";
const RESET = "RESET_ALL";

// initial state
const initialState = [
    {
        increament: "",
        decreament: "",
        total:0,
    },
];

// create reducer function
function inputReducer(state = initialState, action) {
    switch (action.type) {
        case ADDMATCH:
            return [...state, { increament: "", decreament: "",total:0 }];
        case INCREAMENT:
            return state.map((input, index) => {
                if (index === action.payload.index) {
                    return { 
                        ...input, 
                        increament: action.payload.increament,
                        total: Number(input.total) + Number(action.payload.increament)
                    };
                }
                return input;
            });
        case DCREAMENT:
            return state.map((input, index) => {
                if (index === action.payload.index) {
                    return { 
                        ...input, 
                        decreament: action.payload.decreament,                        
                        total: (Number(input.total) - Number(action.payload.decreament) <= 0) ? 0 : Number(input.total) - Number(action.payload.decreament)
                    };
                }
                return input;
            });
        case RESET:
            return state.map((input) => ({
                ...input,
                increament: "",
                decreament: "",
                total: 0,
            }));
        default:
            return state;
    }
}
// create store
const store = Redux.createStore(inputReducer);


// create render function to render inputs
function renderInputs() {
    const inputsContainer = document.getElementById("allMatches");
    inputsContainer.innerHTML = "";
    const inputs = store.getState();
    inputs.forEach((input, index) => {
        const inputDiv = document.createElement("div");
        inputDiv.innerHTML = `<div class="match">
            <div class="wrapper">
                <button class="lws-delete">
                    <img src="./image/delete.svg" alt="" />
                </button>
                <h3 class="lws-matchName">Match ${index + 1}</h3>
            </div>
            <div class="inc-dec">
                <form class="incrementForm" onsubmit="return false">
                    <h4>Increment</h4>
                    <input
                        value="${input.increament}"
                        type="number"
                        name="increment"
                        class="lws-increment"
                        onkeydown="updateIncreament(${index}, this.value, event)"
                    />
                </form>
                <form class="decrementForm" onsubmit="return false">
                    <h4>Decrement</h4>
                    <input
                        value="${input.decreament}"
                        type="number"
                        name="decrement"
                        class="lws-decrement"
                        onkeydown="updateDecreament(${index}, this.value, event)"
                    />
                </form>
            </div>
            <div class="numbers">
                <h2 id="singleResult1" class="lws-singleResult">                    
                    ${input.total}
                </h2>
            </div>
        </div>`;
        inputsContainer.appendChild(inputDiv);
    });
}
function resetAll() {
    return { 
        type: RESET 
    };
}
function updateIncreament(index, increament, e) {
    if(e.keyCode === 13){
        store.dispatch({
            type: INCREAMENT,
            payload: { index, increament },
        });
    }
}
function updateDecreament(index, decreament, e) {
    if(e.keyCode === 13){
        store.dispatch({
            type: DCREAMENT,
            payload: { index, decreament },
        });
    }
}
renderInputs();

store.subscribe(renderInputs);

// button click listeners
addMatchEl.addEventListener("click", () => {
    store.dispatch({
        type: ADDMATCH,
    });
});
resetEl.addEventListener("click", () => {
    store.dispatch(resetAll());
});