import { useState, React } from "react";
import { useLocation, Link } from "react-router-dom";
import "./EditItem.css";

function EditItem() {
	const location = useLocation();
	const { item } = location.state;
	const { from } = location.state;

	const [imgURL, setImgURL] = useState(item.picture);
	const [pasted, setPasted] = useState(false);

	const handleChange = (e) => {
		if (pasted) {
			setImgURL(e.target.value);
		}
		setPasted(false);
	};

	const handlePaste = () => {
		setPasted(true);
	};

	return (
		<div className="container">
			<Link to={from} state={{ item: item }}>
				Back
			</Link>
			<form>
				<label>
					Item Name:
					<input type="text" value={item.name} />
				</label>
				<label>
					Item URL:
					<input type="text" value={item.url} />
				</label>
				<label>
					Item Picture URL:
					<input
						type="text"
						placeholder={imgURL}
						onPaste={handlePaste}
						onChange={handleChange}
					/>
				</label>
				<figure>
					<img src={imgURL} alt={imgURL} />
					<figcaption>Image Preview</figcaption>
				</figure>
				<label>
					Item Price:
					<input type="text" value={item.price} />
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default EditItem;
