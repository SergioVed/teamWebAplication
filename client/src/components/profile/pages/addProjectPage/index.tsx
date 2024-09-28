import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../../header";
import "./index.scss";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { addProject } from "../../../../api/project";
import { PopUp } from "../../components/popup";

export const AddProjectPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [popupVisible, setPopupVisible] = useState("");
  const [link, setLink] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ field: string, message: string }[]>([]);

  const handleSubmit = async () => {
    const result = await addProject(title, description, role, link, images);
  
    if (result.success === false && result.errors) {
      setErrors(result.errors);
    } else {
      setErrors([]);
    }
  };
  
  function deleteImage(key: number) {
    const newImages = images.filter((_, index) => index !== key);
    const newArray = imgUrl.filter((_, index) => index !== key);
    setImages(newImages);
    setImgUrl(newArray);
  }

  function addLink() {
    setPopupVisible("popup-visible");
  }
  function closePopup() {
    setPopupVisible("");
  }
  function deleteLink() {
    setLink("");
  }

  useEffect(() => {
    if (images.length > 0) {
      const urls = images.map((image) => URL.createObjectURL(image));
      setImgUrl(urls);

      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [images]);

  return (
    <>
      <Header />
      <div className="addProjectPage">
        <div className="addProjectPage-userInfo">
          <p className="addProjectPage-userInfo__title">
            Додай новий проєкт у своє портфоліо
          </p>
          <p className="addProjectPage-userInfo__sub-title">
            Усі поля є обов’язковими до заповнення
          </p>
        </div>
        <div className="addProjectPage-mainInfo">
          <div className="addProjectPage-mainInfo__name">
            <label htmlFor="project-name" className="label">
              Назва проєкта
            </label>
            <input
              type="text"
              className="addProjectPage-mainInfo__name__input input"
              id="project-name"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="addProjectPage-mainInfo__role">
            <label htmlFor="project-role" className="label">
              Твоя роль у проєкті
            </label>
            <input
              type="text"
              className="addProjectPage-mainInfo__role__input input"
              id="project-role"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
          <div className="addProjectPage-mainInfo__description">
            <label htmlFor="project-description" className="label">
              Опис проєкта
            </label>
            <textarea
              className="addProjectPage-mainInfo__description__input input"
              id="project-description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div style={{ gridRow: `2/4`, gridColumn: `2/3` }}>
            {link !== "" ? (
              <div className="addProjectPage-mainInfo__link">
                <a className="addProjectPage-mainInfo__link__text">{link}</a>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="addProjectPage-mainInfo__link__close-btn"
                  onClick={deleteLink}
                />
              </div>
            ) : (
              <></>
            )}
            {imgUrl !== null ? (
              <>
                {imgUrl.map((url, key) => (
                  <div className="addProjectPage-mainInfo__image">
                    <img className="img" src={`${url}`} />
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="addProjectPage-mainInfo__image__close-btn"
                      onClick={() => deleteImage(key)}
                    />
                  </div>
                ))}
              </>
            ) : (
              <></>
            )}
            <div className="addProjectPage-mainInfo__content">
              <div className="addProjectPage-mainInfo__content__buttons">
                <input
                  type="file"
                  multiple={true}
                  style={{ display: "none" }}
                  id="file-input"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setImages((prevImages) => [
                        ...prevImages,
                        ...Array.from(files),
                      ]);
                    }
                  }}
                />
                <FontAwesomeIcon
                  icon={faImage}
                  className="addProjectPage-mainInfo__content__buttons__button"
                  onClick={() => {
                    const fileInput = document.getElementById("file-input");
                    if (fileInput) {
                      fileInput.click();
                    }
                  }}
                />
                <FontAwesomeIcon
                  onClick={addLink}
                  icon={faLink}
                  className="addProjectPage-mainInfo__content__buttons__button"
                />
                <PopUp
                  popupDisabled={popupVisible}
                  closePopup={closePopup}
                  setLink={setLink}
                />
              </div>
              <p className="label">додай контенту </p>
            </div>
            <button
              className="addProjectPage-mainInfo__confirm"
              onClick={() => {
                handleSubmit()
              }}
            >
              {/* addProject(title, description, role, link, images); */}
              зберегти
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
